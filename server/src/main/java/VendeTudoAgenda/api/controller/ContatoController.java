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

    @GetMapping("/contatoes/nome/{nome}")
    public ResponseEntity buscarContatosNome(@PathVariable String nome){
        Contato contato = contatoRepository.findByName(nome);
        return ResponseEntity.ok(contato);
    }

    @GetMapping("/contatoes/cpf/{cpf}")
    public ResponseEntity buscarContatosCpf(@PathVariable Long cpf){
        Contato contato = contatoRepository.findByCpf(cpf);
        return ResponseEntity.ok(contato);
    }

    @GetMapping("/contatoes/cnpj/{cnpj}")
    public ResponseEntity buscarContatosCnpj(@PathVariable Long cnpj){
        Contato contato = contatoRepository.findByCnpj(cnpj);
        return ResponseEntity.ok(contato);
    }

    @GetMapping("/contatoes/email/{email}")
    public ResponseEntity buscarContatosEmail(@PathVariable String email){
        Contato contato = contatoRepository.findByEmail(email);
        return ResponseEntity.ok(contato);
    }


    @PostMapping("/contatoes")
    public void criarContato(@RequestBody Contato contato) {
        contatoRepository.save(contato);
    }

    @GetMapping("/contatoes/{id}")
    public Contato obterContato(@PathVariable Long id) {
        return contatoRepository.findOne(id);
    }

    @DeleteMapping("/contatoes/{id}")
    public void deletarContato(@PathVariable Long id) {
        Contato contato = contatoRepository.findById(id);
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
