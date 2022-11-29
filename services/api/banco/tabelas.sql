CREATE EXTENSION pgcrypto;
CREATE TABLE endereco
(
    id     serial primary key,
    numero integer NOT NULL,
    rua    varchar(60) NOT NULL,
    bairro varchar(60) NOT NULL,
    cidade varchar(60) NOT NULL,
    uf     varchar(2)  NOT NULL
);

CREATE TABLE usuario
(
    id          serial primary key,
    nome        varchar(60) NOT NULL,
    email       text        NOT NULL UNIQUE,
    senha       text        NOT NULL,
    cadastro    varchar(20) NOT NULL UNIQUE,
    telefone    varchar(11),
    acesso      integer     NOT NULL,
    id_endereco integer,
    FOREIGN KEY (id_endereco) REFERENCES endereco (id)
);

CREATE TABLE raca
(
    id                serial primary key,
    nomeComum         varchar(60) NOT NULL,
    nomeCientifico    varchar(60) NOT NULL,
    especie           varchar(20) NOT NULL,
    expectativaDeVida varchar(30),
    estadoConservacao varchar(60)
);


CREATE TABLE animal
(
    id                serial primary key,
    apelido           varchar(60) NOT NULL ,
    origem            varchar(120) NOT NULL ,
    sexo              varchar(5) NOT NULL ,
    tipoIdentificacao varchar(20) NOT NULL ,
    peso              numeric NOT NULL ,
    identificacao     text NOT NULL UNIQUE ,
    dataAdmissao      date NOT NULL ,
    id_funcionario    integer,
    id_raca           integer NOT NULL ,
    FOREIGN KEY (id_funcionario) REFERENCES usuario (id),
    FOREIGN KEY (id_raca) REFERENCES raca (id)
);


CREATE TABLE internamento
(
    id          serial primary key,
    id_animal   integer NOT NULL ,
    peso        numeric,
    motivo      text NOT NULL ,
    diagnostico text,
    FOREIGN KEY (id_animal) REFERENCES animal (id)
);

CREATE TABLE monitoramento
(
    id       serial primary key,
    id_internamento integer,
    hora     integer,
    FC       numeric,
    FR       numeric,
    ETCO2    numeric,
    SPO2     numeric,
    PS       numeric,
    PD       numeric,
    PM       numeric,
    TC       numeric,
    GLICEMIA numeric,
    FOREIGN KEY (id_internamento) REFERENCES internamento (id)
);

CREATE TABLE medicacao
(
    id                 serial primary key,
    medicacao          varchar(60),
    viaDeAdministracao varchar(60),
    posologia          varchar(60),
    frequenciaHorario  varchar(60),
    id_internamento    integer,
    FOREIGN KEY (id_internamento) REFERENCES internamento (id)
);

CREATE TABLE usoMedicacao
(
    id           serial primary key,
    horario      time,
    id_medicacao integer,
    FOREIGN KEY (id_medicacao) REFERENCES medicacao (id)
);