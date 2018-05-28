package VendeTudoAgenda.api.controller;

import VendeTudoAgenda.core.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ContatoController {
    
    private ContatoRepository contatoRepository;
    
    @Autowired
    public ContatoController(ContatoRepository contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    /*@PostMapping("/contatos")
    public void criarContato(@RequestBody Contato contato) {
        contatoRepository.save(contato);
    }

    @GetMapping("/contatos{id}")
    public Contato obterContato(@PathVariable Long id) {
        return contatoRepository.findOne(id);
    }

    @PutMapping("/contatos/{id}")
    public void deletarContato(@PathVariable Long id) {
        Contato contato = contatoRepository.findOne(id);
        contatoRepository.delete(contato);
    }

    @GetMapping("/contatos")
    public ResponseEntity listarContatos() {
        return ResponseEntity.ok(contatoRepository.findAll());
    }*/

}
