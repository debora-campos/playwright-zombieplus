const { test, expect } = require("../support");

test("deve logar como administrador", async ({ page }) => {
  await page.login.visit();
  await page.login.submit("admin@zombieplus.com", "pwd123");
  await page.movies.isLoggedIn();
});

test("nao deve logar com a senha incorreta", async ({ page }) => {
  await page.login.visit();
  await page.login.submit("admin@zombieplus.com", "abc123");

  const message =
    "Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.";
  await page.toast.containText(message);
});

test("nao deve logar com email invalido", async ({ page }) => {
  await page.login.visit();
  await page.login.submit("www.papito.com.br", "abc123");
  await page.login.alertHaveText("Email incorreto");
});

test("nao deve logar com o email vazio", async ({ page }) => {
  await page.login.visit();
  await page.login.submit("", "abc123");
  await page.login.alertHaveText("Campo obrigatório");
});

test("nao deve logar com a senha vazia", async ({ page }) => {
  await page.login.visit();
  await page.login.submit("admin@zombieplus.com", "");
  await page.login.alertHaveText("Campo obrigatório");
});

test("nao deve logar quando nenhum campo é preenchido", async ({ page }) => {
  await page.login.visit();
  await page.login.submit("", "");
  await page.login.alertHaveText(["Campo obrigatório", "Campo obrigatório"]);
});
