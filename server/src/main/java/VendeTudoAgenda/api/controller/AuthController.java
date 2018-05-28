package VendeTudoAgenda.api.controller;

import VendeTudoAgenda.api.exception.InvalidRequestException;
import VendeTudoAgenda.core.repository.UsuarioRepository;
import VendeTudoAgenda.core.services.JwtService;
import VendeTudoAgenda.core.services.UsuarioService;
import VendeTudoAgenda.domain.usuario.Usuario;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    private UsuarioRepository usuarioRepository;
    private JwtService jwtService;

    @Autowired
    public AuthController(UsuarioRepository usuarioRepository, JwtService jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Usuario usuarioBody, BindingResult bindingResult) {
        Usuario usuarioBanco = usuarioRepository.findByEmail(usuarioBody.getEmail());

        if (usuarioBanco != null && checarSenha(usuarioBanco.getSenha(), usuarioBody.getSenha())) {
            JSONObject object = new JSONObject(usuarioBanco);
            object.put("token", jwtService.toToken(usuarioBanco));

            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.AUTHORIZATION, jwtService.toToken(usuarioBanco));

            return (new ResponseEntity(object.toString(), headers, HttpStatus.OK));

        } else {
            bindingResult.rejectValue("senha", "INVALIDA", "email ou senha invalido");
            throw new InvalidRequestException(bindingResult);

        }
    }

    @GetMapping("/resetarSenha/{id}")
    public ResponseEntity resetarSenha(@PathVariable Long id){
        Usuario usuario = usuarioRepository.findOne(id);

        if(usuario != null){
            String senhaNova = UsuarioService.gerarSenhaAleatoria();

            usuario.setSenha(senhaNova);
            usuarioRepository.save(usuario);

            return new ResponseEntity(HttpStatus.OK);

        }

        return new ResponseEntity(HttpStatus.FAILED_DEPENDENCY);
    }

    private boolean checarSenha(String senhaBanco, String senhaRequest) {
        return senhaBanco.equals(senhaRequest);
    }

}


