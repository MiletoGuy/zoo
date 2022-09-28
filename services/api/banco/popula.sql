INSERT INTO endereco (rua, numero, bairro, cidade, uf) VALUES ('Rua Concórdia',132, 'Jardim das Flores', 'Quatro Marechal', 'PR');
INSERT INTO endereco (rua, numero, bairro, cidade, uf) VALUES ('Rua Mato Grosso', 534, 'Centro', 'Curitiba', 'PR');
INSERT INTO usuario (nome,email, senha, cadastro, acesso, telefone, id_endereco) VALUES ('Luan Schirmer','luan@email.com',crypt('123',gen_salt('bf')), '696969', 0,'45912345678',1);
INSERT INTO usuario (nome,email, senha, cadastro, acesso, telefone, id_endereco) VALUES ('Maria Eduarda','maria@email.com',crypt('12345',gen_salt('bf')), '122430', 2, '45911223344',2);
INSERT INTO raca (nomecomum, nomecientifico, especie, expectativadevida, estadoconservacao) VALUES ('Jacaré','Alligatoridae','Réptil','30 a 50 anos','Fora de Risco');
INSERT INTO raca (nomecomum, nomecientifico, especie, expectativadevida, estadoconservacao) VALUES ('Onça Pintada','Phantera Onca','Mamíforo','12 a 15 anos (na natureza)','Quase Ameaçada');
INSERT INTO animal (identificacao, apelido, peso, origem, dataAdmissao, sexo, tipoIdentificacao, id_funcionario, id_raca) VALUES ('1332AF3', 'cleitin', 130.3, 'cidade origem2', '2021-12-10', 'FEMEA', 'chip', 2, 2);
INSERT INTO animal (identificacao, apelido, peso, origem, dataAdmissao, sexo, tipoIdentificacao, id_funcionario, id_raca) VALUES ('4432GFT', 'jorgin', 120.5, 'cidade origem', '2021-05-20', 'MACHO', 'chip', 1, 1);
INSERT INTO internamento (motivo, peso, diagnostico, id_animal) VALUES ('Um motivo foda', 12.5, 'Um diagnostico com um texto muito longo', 1);
INSERT INTO internamento (motivo, peso, diagnostico, id_animal) VALUES ('Outro motivo top', 15.8, 'Outro diagnostico mas com um texto ainda mais longo', 2);
INSERT INTO monitoramento (id_internamento, hora, fc, fr, etco2, sp02, ps, pd, pm, tc, glicemia) VALUES (1, 0, 3.2, 4.7, 1.2, 0.5, 32.0, 12.1, 55.3, 31.6, 3.0);
INSERT INTO monitoramento (id_internamento, hora, fc, fr, etco2, sp02, ps, pd, pm, tc, glicemia) VALUES (1, 5, 5.2, 3.7, 2.2, 60.5, 372.0, 8.1, 57.3, 61.6, 5.0);
INSERT INTO monitoramento (id_internamento, hora, fc, fr, etco2, sp02, ps, pd, pm, tc, glicemia) VALUES (2, 1, 5.2, 3.7, 2.2, 50.5, 52.0, 7.1, 7.3, 81.6, 4.0);
INSERT INTO monitoramento (id_internamento, hora, fc, fr, etco2, sp02, ps, pd, pm, tc, glicemia) VALUES (2, 3, 54.2, 5.7, 4.2, 5.5, 32.0, 4.1, 54.3, 6.6, 5.6);

INSERT INTO medicacao (medicacao, viadeadministracao, posologia, frequenciahorario, id_internamento) VALUES ('Medicação top', 'Oral', '10ml', '9:00', 1);
INSERT INTO medicacao (medicacao, viadeadministracao, posologia, frequenciahorario, id_internamento) VALUES ('Outra Medicação', 'Oral', '25ml', '21:00', 2);
INSERT INTO usoMedicacao (horario, id_medicacao) VALUES ('10:00', 1);
INSERT INTO usoMedicacao (horario, id_medicacao) VALUES ('12:00', 1);
INSERT INTO usoMedicacao (horario, id_medicacao) VALUES ('15:00', 2);
INSERT INTO usoMedicacao (horario, id_medicacao) VALUES ('16:00', 2);