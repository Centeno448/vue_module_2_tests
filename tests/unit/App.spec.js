import { shallowMount, mount } from "@vue/test-utils";
import App from "@/App.vue";

test('App.vue recibe el parametro "notas" en la función data() | Asegúrate de que App.vue defina una variable notas dentro de su funcion data', async () => {
  const notas = [{ titulo: "testing 12" }, { titulo: "testing 13" }];

  const dataChecker = mount(App);

  await dataChecker.setData({notas: notas});

  dataChecker.unmount();
});

test('App.vue muestra el titulo de las notas dentro de una lista | Asegúrate de que App.vue defina en su función data la propiedad "notas", y que el titulo de los elementos sea desplegado en una lista', () => {
  const notas = [{ titulo: "testing 12" }, { titulo: "testing 13" }];

  const wrapper = mount(App, {
    data(){
      return {
        notas
      }
    }
  });

  const listItems = wrapper.findAll("li");

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    expect(item.text()).toBe(notas[i].titulo);
  }

  expect(listItems.length).toBe(2);
});


test('App.vue muestra "No hay notas guardadas" cuando el arreglo de notas está vacío | Asegúrate de que App.vue muestre un <p> con "No hay notas guardadas" cuando el arreglo de notas se encuentre vacío', () => {
  const notas = [];

  const wrapper = shallowMount(App, {
    data() {
      return {
        notas
      };
    }
  });

  const p = wrapper.get("p");

  expect(p.text().toLowerCase()).toBe('no hay notas guardadas');
});