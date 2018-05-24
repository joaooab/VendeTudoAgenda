package VendeTudoAgenda.domain;

import lombok.*;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "chamada")
public class Chamada {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name="contato_id", nullable = false)
    private Contato contato;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "data", nullable = false)
    private Date data;

    @Column(name = "duracao", nullable = false)
    private Time duracao;

    @Column(name = "descricao", nullable = false)
    private String descricao;

    @Override
    public String toString() {
        return "Chamada{" +
                "nome='" + nome + '\'' +
                ", data=" + data +
                ", duracao=" + duracao +
                '}';
    }

    public Chamada(Contato contato, String nome, Date data, Time duracao, String descricao) {
        this.contato = contato;
        this.nome = nome;
        this.data = data;
        this.duracao = duracao;
        this.descricao = descricao;
    }
}
