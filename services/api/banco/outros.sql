ALTER SEQUENCE IF EXISTS animal_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS endereco_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS internamento_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS medicacao_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS monitoramento_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS raca_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS usomedicacao_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS usuario_id_seq RESTART WITH 1;

CREATE EXTENSION pgcrypto;