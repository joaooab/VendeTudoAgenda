package VendeTudoAgenda.core.repository;

import VendeTudoAgenda.domain.Chamada;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ChamadaRepository extends JpaRepository<Chamada, Long> {

    @Query("SELECT c FROM Chamada c WHERE c.id =:id ")
    Chamada findById(@Param("id") Long id);

    @Query("SELECT count(ch.id) FROM Chamada ch WHERE ch.contato.id=:id")
    Long quantidadeLigacoes(@Param("id") Long id);

}
