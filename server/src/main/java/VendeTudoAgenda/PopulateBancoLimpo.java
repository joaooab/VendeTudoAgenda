package VendeTudoAgenda;

import VendeTudoAgenda.core.repository.CategoriaRepository;
import VendeTudoAgenda.core.repository.ChamadaRepository;
import VendeTudoAgenda.core.repository.ContatoRepository;
import VendeTudoAgenda.core.repository.UsuarioRepository;
import VendeTudoAgenda.domain.Categoria;
import VendeTudoAgenda.domain.Chamada;
import VendeTudoAgenda.domain.Contato;
import VendeTudoAgenda.domain.usuario.FuncaoUsuario;
import VendeTudoAgenda.domain.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.util.Date;

@Component
public class PopulateBancoLimpo implements ApplicationRunner {

    @Autowired private UsuarioRepository usuarioRepository;
    @Autowired private CategoriaRepository categoriaRepository;
    @Autowired private ContatoRepository contatoRepository;
    @Autowired private ChamadaRepository chamadaRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Usuario usuario = new Usuario("admin", 11111111111L, "vendetudoagenda@gmail.com", new Date(), "rua10", "38445654L", "985763251L", FuncaoUsuario.ADMINISTRADOR, "1234");
        incluirUsuario(usuario);

        incluirUsuario(new Usuario("admin1", 22222222222L, "vendetudoagend@gmail.com", new Date(), "rua10", "38445654", "985763251", FuncaoUsuario.ADMINISTRADOR, "12345"));
        incluirUsuario(new Usuario("admin2", 333L, "vendetudoagen@gmail.com", new Date(), "rua10", "38445654", "985763251", FuncaoUsuario.ADMINISTRADOR, "54321"));
        incluirUsuario(new Usuario("admin3", 44444L, "vendetudoage@gmail.com", new Date(), "rua10", "38445654", "985763251", FuncaoUsuario.ADMINISTRADOR, "1234"));
        incluirUsuario(new Usuario("admin4", 55555L, "vendetudoag@gmail.com", new Date(), "rua10", "38445654", "985763251", FuncaoUsuario.ADMINISTRADOR, "555857"));
        incluirUsuario(new Usuario("admin5", 66666L, "vendetudoa@gmail.com", new Date(), "rua10", "38445654", "985763251", FuncaoUsuario.ADMINISTRADOR, "1234"));
        incluirUsuario(new Usuario("admin6", 777777L, "vendetudo@gmail.com", new Date(), "rua10", "38445654", "985763251", FuncaoUsuario.ADMINISTRADOR, "1234"));

        Categoria categoria = new Categoria("PESSOA JURIDICA");
        categoria = incluirCategoria(categoria);
        categoria = new Categoria("PESSOA FISICA");
        categoria = incluirCategoria(categoria);

        Contato contato = new Contato(categoria, usuario, "Joao", 11111111111L, null, "joao@email", new Date(), "rua12", "123132132L", "3522625L", true);
        contato = incluirContato(contato);

        Chamada chamada = new Chamada(contato, "Chamada - 1", new Date(), new Time(System.currentTimeMillis()), "Descricao da Chamada");
        incluirChamada(chamada);
    }

    private void incluirUsuario(Usuario usuario){
        usuarioRepository.save(usuario);
    }

    private Categoria incluirCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    private Contato incluirContato(Contato contato){
        return contatoRepository.save(contato);
    }

    private void incluirChamada(Chamada chamada){
        chamadaRepository.save(chamada);
    }

}
