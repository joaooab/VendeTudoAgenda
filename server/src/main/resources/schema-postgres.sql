DROP TABLE IF EXISTS categoria CASCADE;
DROP TABLE IF EXISTS contato CASCADE;
DROP TABLE IF EXISTS chamada CASCADE;
DROP TABLE IF EXISTS usuario CASCADE;

create table categoria (
    id int not null,
    categoria_nome varchar(64) not null,
    PRIMARY KEY (id)
);

create table contato (
    id int not null,
    categoria_id int not null,
    contato_nome varchar(256) not null,
    contato_cpf_cnpj varchar(14) not null,
    contato_email varchar(64),
    contato_data_nascimento date not null,
    contato_endereco varchar(64) not null,
    contato_telefone_fixo varchar(10),
    contato_celular varchar(11) not null,
    contato_autoriza_email bool not null,
    PRIMARY KEY (id),
    FOREIGN KEY (categoria_id) REFERENCES categoria(id)
);

create table chamada (
    id int not null,
    contato_id int not null,
    chamada_nome varchar(256) not null,
    chamada_data date not null,
    chamada_duracao time not null,
    chamada_descricao text not null,
    PRIMARY KEY (id),
    FOREIGN KEY (contato_id) REFERENCES contato(id)
);

create table usuario (
    id int not null,
    usuario_nome varchar(256) not null,
    usuario_cpf varchar(14) not null,
    usuario_email varchar(64) not null,
    usuario_data_nascimento date not null,
    usuario_endereco varchar(64) not null,
    usuario_telefone_fixo varchar(10),
    usuario_celular varchar(11) not null,
    usuario_funcao text not null,
    usuario_senha varchar(16) not null,
    PRIMARY KEY (id)
);