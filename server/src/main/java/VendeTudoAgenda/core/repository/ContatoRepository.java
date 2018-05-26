package VendeTudoAgenda.core.repository;

import VendeTudoAgenda.domain.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Long> {

}
