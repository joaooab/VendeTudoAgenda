package VendeTudoAgenda.api.controller;

import VendeTudoAgenda.api.exception.InvalidRequestException;
import VendeTudoAgenda.core.repository.UsuarioRepository;
import VendeTudoAgenda.core.services.JwtService;
import VendeTudoAgenda.domain.usuario.Usuario;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.AUTHORIZATION, jwtService.toToken(usuarioBanco));

            return (new ResponseEntity(object.toString(), headers, HttpStatus.OK));

        } else {
            bindingResult.rejectValue("senha", "INVALIDA", "email ou senha invalido");
            throw new InvalidRequestException(bindingResult);

        }
    }

    private boolean checarSenha(String senhaBanco, String senhaRequest) {
        return senhaBanco.equals(senhaRequest);
    }

}


