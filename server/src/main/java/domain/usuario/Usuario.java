package domain.usuario;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "usuario_nome", nullable = false)
    private String nome;

    @Column(name = "usuario_cpf", nullable = false)
    private Long cpf;

    @Column(name = "usuario_email", nullable = false)
    private String email;

    @Column(name = "usuario_data_nascimento", nullable = false)
    private Date dataNascimento;

    @Column(name = "usuario_endereco", nullable = false)
    private String endereco;

    @Column(name = "usuario_telefone_fixo")
    private Long telefoneFixo;

    @Column(name = "usuario_celular", nullable = false)
    private Long celular;

    @Column(name = "usuario_funcao", nullable = false)
    private FuncaoUsuario funcao;

    @Column(name = "usuario_senha", nullable = false)
    private String senha;

    public Usuario(Long id, String nome, Long cpf, String email, Date dataNascimento, String endereco, Long telefoneFixo, Long celular, FuncaoUsuario funcao, String senha) {
        this.id = id;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getCpf() {
        return cpf;
    }

    public void setCpf(Long cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Long getTelefoneFixo() {
        return telefoneFixo;
    }

    public void setTelefoneFixo(Long telefoneFixo) {
        this.telefoneFixo = telefoneFixo;
    }

    public Long getCelular() {
        return celular;
    }

    public void setCelular(Long celular) {
        this.celular = celular;
    }

    public FuncaoUsuario getFuncao() {
        return funcao;
    }

    public void setFuncao(FuncaoUsuario funcao) {
        this.funcao = funcao;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
