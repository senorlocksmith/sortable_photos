import { Controller } from "stimulus"
import Sortable from "sortablejs"

export default class extends Controller {
  connect() {
    this.sortable = Sortable.create(this.element, {
      group: 'shared',
      animation: 150,
      onEnd: this.end.bind(this)
    })
  }


  end(event) {
    let id = event.item.id
    let data = new FormData()
    let images = [{ id: id, position: event.newIndex + 1 }]
    let collection = event.item.parentElement.children
    for (let index in collection) {
      if (imageId = collection[index].getAttribute('data-id')) {
        if (parseInt(imageId) !== parseInt(id)) {
          images.push({ id: imageId, position: parseInt(index) + 1 })
        }
      }
    }
    data.append('images', images)

    Rails.ajax({
      url: this.data.get('url'),
      type: 'PATCH',
      data: data
    })
    }
}