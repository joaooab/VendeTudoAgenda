package VendeTudoAgenda.domain.usuario;

import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonRootName("usuario")
@Table(name = "usuario")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf", nullable = false)
    private Long cpf;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "data_nascimento", nullable = false)
    private Date dataNascimento;

    @Column(name = "endereco", nullable = false)
    private String endereco;

    @Column(name = "telefone_fixo")
    private Long telefoneFixo;

    @Column(name = "celular", nullable = false)
    private Long celular;

    @Column(name = "funcao", nullable = false)
    private FuncaoUsuario funcao;

    @Column(name = "senha", nullable = false)
    private String senha;

    public Usuario(String nome, Long cpf, String email, Date dataNascimento, String endereco, Long telefoneFixo, Long celular, FuncaoUsuario funcao, String senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefoneFixo = telefoneFixo;
        this.celular = celular;
        this.funcao = funcao;
        this.senha = senha;
    }

    public Usuario(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }

    public Usuario(String email){
        this.email = email;
    }

}
