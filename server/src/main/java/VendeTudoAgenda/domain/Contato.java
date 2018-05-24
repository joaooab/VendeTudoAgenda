package VendeTudoAgenda.domain;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
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

    @Column(name = "cpf_cnpj", nullable = false)
    private Long cpfcnpj;

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

    public Contato(Categoria categoria, String nome, Long cpfcnpj, String email, Date dataNascimento, String endereco, Long telefoneFixo, Long celular, Boolean autorizaEmail) {
        this.categoria = categoria;
        this.nome = nome;
        this.cpfcnpj = cpfcnpj;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefoneFixo = telefoneFixo;
        this.celular = celular;
        this.autorizaEmail = autorizaEmail;
    }

    @Override
    public String toString() {
        return "Contato{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", cpfcnpj=" + cpfcnpj +
                '}';
    }
}
