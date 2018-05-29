package VendeTudoAgenda.domain;

import VendeTudoAgenda.core.repository.ContatoRepository;
import VendeTudoAgenda.domain.usuario.FuncaoUsuario;
import VendeTudoAgenda.domain.usuario.Usuario;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static junit.framework.TestCase.assertTrue;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ContatoTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private ContatoRepository contatoRepository;

    private Categoria categoria;
    private Usuario usuario;

    @Before
    public void setUp() {
        categoria = new Categoria("PESSOA JURIDICA");
        entityManager.persist(categoria);
        usuario = new Usuario("admin", 11111111111L, "vendetudoagenda@gmail.com", new Date(), "rua10", "38445654", "985763251", FuncaoUsuario.ADMINISTRADOR, "1234");
        entityManager.persist(usuario);
        entityManager.flush();
    }

    @Test
    public void deve_salvar_e_buscar_usuario_pelo_nome() {
        // given
        Contato contato = new Contato(categoria, usuario, "TESTE", 11111111111L, null, "joao@email", new Date(), "rua12", "38445654", "985763251", true);
        entityManager.persist(contato);
        entityManager.flush();

        // when
        Contato contatoBanco = contatoRepository.findByName(contato.getNome());

        // then
        assertTrue(contatoBanco.getNome().equals("TESTE"));
    }

    @Test
    public void deve_salvar_e_buscar_usuario_pelo_id() {
        // given
        Contato contato = new Contato(categoria, usuario, "TESTE", 11111111111L, null, "joao@email", new Date(), "rua12", "38445654", "985763251", true);
        entityManager.persist(contato);
        entityManager.flush();

        // when
        Contato contatoBanco = contatoRepository.findById(3L);

        // then
        assertTrue(contatoBanco.getNome().equals("TESTE"));
    }

    @Test
    public void deve_salver_e_deletar_contato() {
        Contato contato = new Contato(categoria, usuario, "TESTE", 11111111111L, null, "joao@email", new Date(), "rua12", "38445654", "985763251", true);
        entityManager.persist(contato);
        entityManager.flush();

        // when
        contatoRepository.delete(contato);

        // then
        assertTrue(contatoRepository.findAll().size() == 0);
    }

}