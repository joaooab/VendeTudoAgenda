package domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "contato")
public class Contato {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "categoria_id", nullable = false)
    private Categoria categoria;

    @Column(name = "contato_nome", nullable = false)
    private String nome;

    @Column(name = "contato_cpf_cnpj", nullable = false)
    private Long cpfcnpj;

    @Column(name = "contato_email")
    private String email;

    @Column(name = "contato_data_nascimento", nullable = false)
    private Date dataNascimento;

    @Column(name = "contato_endereco", nullable = false)
    private String endereco;

    @Column(name = "contato_telefone_fixo")
    private Long telefoneFixo;

    @Column(name = "contato_celular", nullable = false)
    private Long celular;

    @Column(name = "contato_autoriza_email", nullable = false)
    private Boolean autorizaEmail;

    public Contato(Long id, String nome, Long cpfcnpj, String email,
                   Date dataNascimento, String endereco, Long telefoneFixo,
                   Long celular, Categoria categoria, Boolean autorizaEmail) {
        this.id = id;
        this.nome = nome;
        this.cpfcnpj = cpfcnpj;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefoneFixo = telefoneFixo;
        this.celular = celular;
        this.categoria = categoria;
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

    public Long getCpf() {
        return cpfcnpj;
    }

    public void setCpf(final Long cpf) {
        this.cpfcnpj = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(final Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(final String endereco) {
        this.endereco = endereco;
    }

    public Long getTelefoneFixo() {
        return telefoneFixo;
    }

    public void setTelefoneFixo(final Long telefoneFixo) {
        this.telefoneFixo = telefoneFixo;
    }

    public Long getCelular() {
        return celular;
    }

    public void setCelular(final Long celular) {
        this.celular = celular;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(final Categoria categoria) {
        this.categoria = categoria;
    }

    public Boolean getAutorizaEmail() {
        return autorizaEmail;
    }

    public void setAutorizaEmail(final Boolean autorizaEmail) {
        this.autorizaEmail = autorizaEmail;
    }
}
