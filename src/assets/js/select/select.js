
export  default class Select {
  constructor(className) {
    this.$wrapper = document.querySelector(className)
    this.selectFilter = this.$wrapper.querySelector('.header_select_header');
    this.itemsContainer = this.$wrapper.querySelector('.header_select_body');
    this.selectItem = [...this.itemsContainer.querySelectorAll('.header_select_item')];

    this.selectVal = this.$wrapper.querySelector('.header_select_carrent');
  }


  currentItem(event) {

    this.selectVal.innerText = event.currentTarget.innerText;

    this.closeSelectOptions()
    this.chekSelected(event.currentTarget)
  }

  closeSelectOptions() {
    if(this.$wrapper.classList.contains('is-active')) {
      this.$wrapper.classList.toggle('is-active');
    }
  }

  clickSelect() {
    this.selectFilter.addEventListener('click', ()=> {
      this.$wrapper.classList.toggle('is-active');
    })
    this.selectItem.forEach(item => {
      item.addEventListener('click', (event) => this.currentItem(event))
    })
  }

  chekSelected(currentItem) {
    this.selectItem.forEach((item) => {
      if(item === currentItem) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }

  init() {
    if(!this.selectFilter) return
    this.clickSelect()
  }
}