package VendeTudoAgenda;

import VendeTudoAgenda.core.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VendeTudoAgendaApplication {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public static void main(String[] args) {
        SpringApplication.run(VendeTudoAgendaApplication.class, args);
    }

    /*@Bean
    InitializingBean sendDatabase(){
        return () -> {
            Usuario usuario = new Usuario();

            usuario.setNome("admin");
            usuario.setCpf(11111111111L);
            usuario.setEmail("admin@email");
            usuario.setDataNascimento(new Date());
            usuario.setEndereco("rua10");
            usuario.setTelefoneFixo(38445654L);
            usuario.setCelular(985763251L);
            usuario.setFuncao(FuncaoUsuario.ADMINISTRADOR);
            usuario.setSenha("1234");

            usuarioRepository.save(usuario);
        };
    }*/

}
