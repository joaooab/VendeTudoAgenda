package VendeTudoAgenda.api.controller;

import VendeTudoAgenda.core.repository.CategoriaRepository;
import VendeTudoAgenda.domain.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class CategoriaController {

    private CategoriaRepository categoriaRepository;

    @Autowired
    public CategoriaController(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @PostMapping("/categorias")
    public void criarCategorias(@RequestBody Categoria categoria) {
        categoriaRepository.save(categoria);
    }

    @GetMapping("/categorias/{id}")
    public Categoria obterCategoria(@PathVariable Long id) {
        return categoriaRepository.findOne(id);
    }

    @PutMapping("/categorias/{id}")
    public void deletarUsuario(@PathVariable Long id) {
        Categoria categoria = categoriaRepository.findOne(id);
        categoriaRepository.delete(categoria);
    }

    @GetMapping("/categorias")
    public ResponseEntity listarCategorias() {
        return ResponseEntity.ok(categoriaRepository.findAll());
    }

}
