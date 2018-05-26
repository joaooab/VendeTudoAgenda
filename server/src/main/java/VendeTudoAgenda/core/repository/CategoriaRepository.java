package VendeTudoAgenda.core.repository;

import VendeTudoAgenda.domain.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

    Categoria findById(Long idCategoria);
}
