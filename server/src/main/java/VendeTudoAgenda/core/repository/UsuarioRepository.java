package VendeTudoAgenda.core.repository;

import VendeTudoAgenda.domain.usuario.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

}
