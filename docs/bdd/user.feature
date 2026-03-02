Feature: Informações pessoais no Orange HRM

  Como usuário autenticado
  Quero atualizar informações pessoais e profissionais
  Para manter os dados atualizados no sistema

  Background:
    Given que estou na página de login do Orange HRM
    And realizo login com credenciais válidas
    And estou na página de dashboard

  Scenario: Atualizar informações pessoais e profissionais com sucesso
    When acesso o menu "My Info"
    And altero os dados pessoais com informações válidas
    And altero os dados do funcionário com informações válidas
    And preencho o status do colaborador
    And clico no botão "Save"
    Then as informações devem ser salvas com sucesso
