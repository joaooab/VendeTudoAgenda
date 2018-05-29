package VendeTudoAgenda.api.controller;

import VendeTudoAgenda.core.repository.ContatoRepository;
import VendeTudoAgenda.domain.Contato;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ContatoController {
    
    private ContatoRepository contatoRepository;
    
    @Autowired
    public ContatoController(ContatoRepository contatoRepository) {
        this.contatoRepository = contatoRepository;
    }

    @PostMapping("/contatoes")
    public void criarContato(@RequestBody Contato contato) {
        contatoRepository.save(contato);
    }

    @GetMapping("/contatoes/{id}")
    public Contato obterContato(@PathVariable Long id) {
        return contatoRepository.findOne(id);
    }

    @PutMapping("/contatoes/{id}")
    public void deletarContato(@PathVariable Long id) {
        Contato contato = contatoRepository.findOne(id);
        contatoRepository.delete(contato);
    }

    @GetMapping("/contatoes")
    public ResponseEntity listarContatos() {
        return ResponseEntity.ok(contatoRepository.findAll());
    }

    @PatchMapping("/contatoes/{id}")
    public ResponseEntity alterarContato(@PathVariable Long id, @RequestBody Contato contato){
        Contato contatoDB = contatoRepository.findById(id);
        contato.setId(id);

        if(contato.getNome() == null){
            contato.setNome(contatoDB.getNome());
        }
        if(contato.getCpf() == null){
            contato.setCpf(contatoDB.getCpf());
        }
        if(contato.getCnpj() == null){
            contato.setCnpj(contatoDB.getCnpj());
        }
        if(contato.getEmail() == null){
            contato.setEmail(contatoDB.getEmail());
        }
        if(contato.getDataNascimento() == null){
            contato.setDataNascimento(contatoDB.getDataNascimento());
        }
        if(contato.getEndereco() == null){
            contato.setEndereco(contatoDB.getEndereco());
        }
        if(contato.getTelefoneFixo() == null){
            contato.setTelefoneFixo(contatoDB.getTelefoneFixo());
        }
        if(contato.getCelular() == null){
            contato.setCelular(contatoDB.getCelular());
        }
        if(contato.getAutorizaEmail() == null){
            contato.setAutorizaEmail(contatoDB.getAutorizaEmail());
        }
        if(contato.getCategoria() == null){
            contato.setCategoria(contatoDB.getCategoria());
        }
        if(contato.getUsuario() == null){
            contato.setUsuario(contatoDB.getUsuario());
        }

        contatoRepository.save(contato);
        return (new ResponseEntity(HttpStatus.OK));
    }

}
