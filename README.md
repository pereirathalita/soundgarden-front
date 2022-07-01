# soundgarden-front

FUNCIONALIDADES OBRIGATÓRIAS

Painel de controle
1. Criar Evento: receba os dados que o usuário inserir através do formulário da
página criar-evento.html e envie essa informação para a API utilizando o método
POST.
2. Editar Evento: para cada evento listado, existe um botão editar que deve
direcionar para editar-evento.html?id=0, com o id do evento selecionado. Na
página de edição, o formulário deve aparecer preenchido com os dados do
evento, permitindo a edição das informações.
3. Excluir Evento: para cada evento listado, existe um botão editar que deve
direcionar para excluir-evento.html?id=0, com o id do evento selecionado. Na
página de edição, o formulário deve aparecer preenchido com os dados do
evento, porém com os campos desabilitados. Ao clicar no botão "excluir para
sempre", deve fazer uma requisição na API para excluir o evento do banco de
dados.
4. Ver reservas do evento: Listar as reservas de ingressos do evento selecionado.

Landing Page
5. Reserva de ingresso: ao clicar em "reservar ingresso", deve abrir um modal com
formulário (nome e email), para que o usuário possa preencher os dados e
reservar o ingresso.

FUNCIONALIDADE OPCIONAL
1. Criar um banner rotativo para a primeira seção da landing page. Esse banner
deverá exibir alguns eventos de destaque para os usuários

CRITÉRIOS DE AVALIAÇÃO
1. As páginas devem ser responsivas, se adaptando bem para
desktop, tablet e smartphones.
2. Os links devem ser configurados para permitir a navegação
entre as páginas.
3. O site deve ser disponibilizado no Github Pages, com todas
as imagens renderizando corretamente.
4. Você deve sempre fazer tratamento de erros quando usar as promises usando as
estruturas de catch
