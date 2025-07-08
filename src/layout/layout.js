function renderHeader() {
  const header = document.createElement('header')
  header.classList.add('header')

  const container = document.createElement('div')
  container.classList.add('container','head')

  const menu = document.createElement('nav')
  menu.classList.add('menu')

  const linkHome = document.createElement('a')
  const linkWallets = document.createElement('a')
  const linkTransaction = document.createElement('a')

  linkHome.href = '/'
  linkHome.textContent = 'Главная'
  linkWallets.href = '/wallets'
  linkWallets.textContent = 'Мои кошельки'
  linkTransaction.href = '/transaction'
  linkTransaction.textContent = 'Мои транзакции'

  menu.append(linkHome,linkWallets,linkTransaction)

  const rightDiv = document.createElement('div')
  rightDiv.classList.add('right-div')
  const link = document.createElement('a')
  link.href = '#'
  link.textContent = 'alexadams@google.com'
  const image = document.createElement('img')
  image.src = '/images/log-out.svg'

  rightDiv.append(link,image)

  
  container.append(menu,rightDiv)
  header.append(container)

  return header
}

export function renderLayout() {
  const body = document.querySelector('body')
  const header = renderHeader();

  body.prepend(header)
}

