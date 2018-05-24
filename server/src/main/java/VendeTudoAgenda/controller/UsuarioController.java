package VendeTudoAgenda.controller;

import VendeTudoAgenda.core.repository.UsuarioRepository;
import VendeTudoAgenda.domain.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    private UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping("/usuarios")
    public void criarUsuario(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    @DeleteMapping("/usuarios/{id}")
    public void deletarUsuario(@PathVariable Long id) {
        Usuario usuario = usuarioRepository.findOne(id);
        usuarioRepository.delete(usuario);
    }

    @GetMapping("/usuarios")
    public List<Usuario> listarUsuario(){
        return (List<Usuario>) usuarioRepository.findAll();
    }

}

