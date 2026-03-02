Feature: Autenticação de usuário no Orange HRM

  Como usuário do sistema Orange HRM
  Quero realizar login
  Para acessar a aplicação

  Background:
    Given que estou na página de login do Orange HRM

  Scenario: Login realizado com sucesso
    When informo um usuário válido
    And informo uma senha válida
    And clico no botão de login
    Then devo ser redirecionado para o dashboard
    And devo visualizar os elementos principais da página inicial

  Scenario: Tentativa de login com credenciais inválidas
    When informo um usuário inválido
    And informo uma senha inválida
    And clico no botão de login
    Then devo visualizar uma mensagem de acesso inválido
