package VendeTudoAgenda.domain;

import VendeTudoAgenda.core.repository.CategoriaRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import static junit.framework.TestCase.assertTrue;

@RunWith(SpringRunner.class)
@DataJpaTest
public class CategoriaTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private CategoriaRepository categoriaRepository;

//    @Autowired
//    private MockMvc mvc;
//
//    @MockBean
//    private JwtService jwtService;
//
//    private Map<String, Object> param;

    @Test
    public void whenFindByName_thenReturnEmployee() {
        // given
        Categoria categoria = new Categoria("TESTE");
        entityManager.persist(categoria);
        entityManager.flush();

        // when
        Categoria categoriaEncontrada = categoriaRepository.findByName(categoria.getNome());

        // then
        assertTrue(categoriaEncontrada.getNome().equals("TESTE"));
    }
}