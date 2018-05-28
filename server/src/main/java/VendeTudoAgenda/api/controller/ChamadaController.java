package VendeTudoAgenda.api.controller;

import VendeTudoAgenda.core.repository.ChamadaRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ChamadaController {

    private ChamadaRepository chamadaRepository;

    @Autowired
    public ChamadaController(ChamadaRepository chamadaRepository) {
        this.chamadaRepository = chamadaRepository;
    }

    /*@PostMapping("/chamadas")
    public void criarChamada(@RequestBody Chamada chamada) {
        chamadaRepository.save(chamada);
    }

    @GetMapping("/chamadas{id}")
    public Chamada obterChamada(@PathVariable Long id) {
        return chamadaRepository.findOne(id);
    }

    @PutMapping("/chamadas{id}")
    public void deletarChamada(@PathVariable Long id) {
        Chamada chamada = chamadaRepository.findOne(id);
        chamadaRepository.delete(chamada);
    }

    @GetMapping("/chamadas")
    public void listarChamadas() {
        ResponseEntity.ok(chamadaRepository.findAll());
    }*/
}
