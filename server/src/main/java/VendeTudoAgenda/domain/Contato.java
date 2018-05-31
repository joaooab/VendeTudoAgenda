package VendeTudoAgenda.domain;

import VendeTudoAgenda.domain.usuario.Usuario;
import com.fasterxml.jackson.annotation.JsonRootName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonRootName("contato")
@Table(name = "contato", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf")
    private Long cpf;

    @Column(name = "cnpj")
    private Long cnpj;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "data_nascimento", nullable = false)
    private Date dataNascimento;

    @Column(name = "endereco", nullable = false)
    private String endereco;

    @Column(name = "telefone_fixo")
    private String telefoneFixo;

    @Column(name = "celular", nullable = false)
    private String celular;

    @Column(name = "autoriza_email", nullable = false)
    private Boolean autorizaEmail;

    public Contato(Categoria categoria, Usuario usuario, String nome, Long cpf, Long cnpj, String email, Date dataNascimento, String endereco, String telefoneFixo, String celular, Boolean autorizaEmail) {
        this.categoria = categoria;
        this.usuario = usuario;
        this.nome = nome;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefoneFixo = telefoneFixo;
        this.celular = celular;
        this.autorizaEmail = autorizaEmail;
    }



}
