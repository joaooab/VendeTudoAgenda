package VendeTudoAgenda.domain;

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
@Table(name = "contato")
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf")
    private Long cpf;

    @Column(name = "cnpj")
    private Long cnpj;

    @Column(name = "email")
    private String email;

    @Column(name = "data_nascimento", nullable = false)
    private Date dataNascimento;

    @Column(name = "endereco", nullable = false)
    private String endereco;

    @Column(name = "telefone_fixo")
    private Long telefoneFixo;

    @Column(name = "celular", nullable = false)
    private Long celular;

    @Column(name = "autoriza_email", nullable = false)
    private Boolean autorizaEmail;

    public Contato(Categoria categoria, String nome, Long cpf, Long cnpj, String email, Date dataNascimento, String endereco, Long telefoneFixo, Long celular, Boolean autorizaEmail) {
        this.categoria = categoria;
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
