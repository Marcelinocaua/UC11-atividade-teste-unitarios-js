var { criarContato, removerContato, listarContato } = require('./functions.js');

test("Deve verificar se a lista de contatos é vazia", () => {
  listarContato();
  expect(listarContato()).toBe('Lista está vazia');
})

test("Deve criar contato", () => {
  var contatos = criarContato("Caua", "Cauamarcelino@gmail.com", " 0000-0000");
  expect(contatos.nome).toBe("Caua");
  expect(contatos.email).toBe("Cauamarcelino@gmail.com");
  expect(contatos.telefone).toBe(" 0000-0000");
})

test("Deve verificar se o campo nome é vazio", () => {
  var contatos = criarContato("", "Cauamarcelino@gmail.com", " 0000-0000");
  expect(contatos).toBe('Nome é obrigatório');
})

test("Deve verificar se os campo email é vazio", () => {
  var contatos = criarContato("Caua", "", " 0000-0000");
  expect(contatos).toBe('E-mail é obrigatório');
})

test("Deve verificar se o campo telefone é vazio", () => {
  var contatos = criarContato("Caua", "Cauamarcelino@gmail.com", "");
  expect(contatos).toBe('Telefone é obrigatório');
})

test("Deve remover contato", () => {
  var contatos = criarContato("Caua", "Cauamarcelino@gmail.com",  "0000-0000");
  removerContato(contatos.id);
  var listas = listarContato();
  expect(listas).not.toContain(contatos);
})

test("Deve verificar se o contato não foi encontrado", () => {
  removerContato();
  var listas = listarContato();
  expect(listas).not.toContain('Contato não encontrado');
})
