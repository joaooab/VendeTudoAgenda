package VendeTudoAgenda.api.controller;

import VendeTudoAgenda.core.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {

    private UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    /*@PostMapping("/usuarios")
    public void criarUsuario(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    @GetMapping("/usuarios/{id}")
    public Usuario obterUsuario(@PathVariable Long id) {
        return usuarioRepository.findOne(id);
    }

    @PutMapping("/usuarios/{id}")
    public void deletarUsuario(@PathVariable Long id) {
        Usuario usuario = usuarioRepository.findOne(id);
        usuarioRepository.delete(usuario);
    }

    @GetMapping("/usuarios")
    public ResponseEntity listarUsuario() {
        return ResponseEntity.ok(usuarioRepository.findAll());
    }
*/
}

