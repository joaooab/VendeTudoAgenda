package VendeTudoAgenda.api.controller;

import VendeTudoAgenda.core.repository.ChamadaRepository;
import VendeTudoAgenda.domain.Chamada;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ChamadaController {

    private ChamadaRepository chamadaRepository;

    @Autowired
    public ChamadaController(ChamadaRepository chamadaRepository) {
        this.chamadaRepository = chamadaRepository;
    }

    @PostMapping("/chamadas")
    public void criarChamada(@RequestBody Chamada chamada) {
        chamadaRepository.save(chamada);
    }

    @GetMapping("/chamadas/{id}")
    public Chamada obterChamada(@PathVariable Long id) {
        return chamadaRepository.findOne(id);
    }

    @PutMapping("/chamadas/{id}")
    public void deletarChamada(@PathVariable Long id) {
        Chamada chamada = chamadaRepository.findOne(id);
        chamadaRepository.delete(chamada);
    }

    @GetMapping("/chamadas")
    public void listarChamadas() {
        ResponseEntity.ok(chamadaRepository.findAll());
    }

    @PatchMapping("/chamadas/{id}")
    public ResponseEntity alterarChamada(@PathVariable Long id, @RequestBody Chamada chamada){
        Chamada chamadaDB = chamadaRepository.findById(id);

        if(chamada.getNome() == null){
            chamada.setNome(chamadaDB.getNome());
        }
        if(chamada.getData() == null){
            chamada.setData(chamadaDB.getData());
        }
        if (chamada.getDuracao() == null){
            chamada.setDuracao(chamadaDB.getDuracao());
        }
        if(chamada.getDescricao() == null){
            chamada.setDescricao(chamadaDB.getDescricao());
        }
        if(chamada.getContato() == null){
            chamada.setContato(chamadaDB.getContato());
        }

        chamadaRepository.save(chamada);
        return new ResponseEntity(HttpStatus.OK);
    }
}
