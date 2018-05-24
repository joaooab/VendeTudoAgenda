package domain;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "chamada")
public class Chamada {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "chamada_nome", nullable = false)
    private String nome;

    @Column(name = "chamada_data", nullable = false)
    private Date data;

    @Column(name = "chamada_duracao", nullable = false)
    private Time duracao;

    @Column(name = "chamada_descricao", nullable = false)
    private String descricao;

    public Chamada(Long id, String nome, Date data, Time duracao, String descricao) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.duracao = duracao;
        this.descricao = descricao;
    }

    @Override
    public String toString() {
        return "Chamada{" +
                "nome='" + nome + '\'' +
                ", data=" + data +
                ", duracao=" + duracao +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(final String nome) {
        this.nome = nome;
    }

    public Date getData() {
        return data;
    }

    public void setData(final Date data) {
        this.data = data;
    }

    public Time getDuracao() {
        return duracao;
    }

    public void setDuracao(final Time duracao) {
        this.duracao = duracao;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(final String descricao) {
        this.descricao = descricao;
    }
}
