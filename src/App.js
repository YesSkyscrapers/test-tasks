import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [tab, setTab] = useState(0)

  useEffect(() => {
    document.title = "Тестовые задания"
  }, [])

  const onTabSelect = tabId => {
    setTab(tabId)
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="Tabs-container noselect"> 
          <div onClick={() => onTabSelect(0)} className={tab==0 ? "Active-tab" : "Tab"}>Frontend</div>
          <div onClick={() => onTabSelect(1)} className={tab==1 ? "Active-tab" : "Tab"}>Backend</div>
        </div>
        {
          tab==0 ? (
        <div className="Task-container">
          <div className="Task-title">Список Todo</div>
          <div className="Task-text">
            <div>
              <span>Создать компонент соответствующий нижеуказанным требованиям.</span><br/>
              <span>Наличие файлика readme с инструкциями по запуску является плюсом.</span><br/>
              <span>Также отсутствие Expo в проекте является очень большим плюсом.</span><br/>
            </div>
            <br/>
            <div>
              <span >1-ая сложность:</span><br/>
              <span className="Task-subtitle">• Добавление новой записи;</span><br/>
              <span className="Task-subtitle">• Отображение списка добавленных записей;</span><br/>
              <span className="Task-subtitle">• Удаление из списка добавленных записей.</span><br/>
            </div>
            <br/>
            <div>
              <span>2-ая сложность:</span><br/>
              <span className="Task-subtitle">• (Все пункты с предыдущего уровня сложности)</span><br/>
              <span className="Task-subtitle">• Новая запись добавляется при условии, что длина записи меньше некоторого N;</span><br/>
              <span className="Task-subtitle">• Переключение статуса записи Выполнено / Невыполненный при клике на её название.</span><br/>
            </div>
            <br/>
            <div>
              <span>3-ая сложность:</span><br/>
              <span className="Task-subtitle">• (Все пункты с предыдущего уровня сложности)</span><br/>
              <span className="Task-subtitle">• Фильтрация по типу (все, выполненные, невыполненные);</span><br/>
              <span className="Task-subtitle">• Отображение счётчика выполненных и невыполненных задач.</span><br/>
            </div>
            <br/>
            <div>
              <span>4-ая сложность:</span><br/>
              <span className="Task-subtitle">• (Все пункты с предыдущего уровня сложности)</span><br/>
              <span className="Task-subtitle">• Использование хранилища (Redux).</span><br/>
            </div>
          </div>
        </div>
          ) : (
        <div className="Backend-task-container">
          <div className="Task-title">Тестовое задание</div>
          <div className="Backend-task-text">
            <span>{`По адресу `}</span>
            <a href="http://testlodtask20172.azurewebsites.net/task">http://testlodtask20172.azurewebsites.net/task</a>
            <span>{` вы можете получить строку, содержащую информацию о жителях города X. Строка содержит id, имя с фамилией и пол каждого жителя. А по адресу `}</span>
            <a href="http://testlodtask20172.azurewebsites.net/task/{id}">{`http://testlodtask20172.azurewebsites.net/task/{id}`}</a>
            <span>{` вы получите имя, фамилию, пол и возраст конкретного жителя, id которого можно взять из 1 запроса.`}</span>
            <br/>
            <br/>
            <span>{`Нужно написать приложение (API), согласно одному из требований, приведенных ниже, на ваш выбор. Сложность растет от 1 к 3`}</span>
            <br/>
            <br/>
            <span>{`1) Нужно реализовать 2 метода api, которые будут:`}</span>
            <br/>
            <br/>
            <span>{`• Возвращать список жителей города X. Так же в методе должна быть возможность передавать опциональный параметр, по которому жители будут фильтроваться по полу (возвращать всех, только мужчин, или только женщин). Так же, в методе нужна пагинация (постраничный вывод). В результате не нужно выводить возраст жителя.`}</span>
            <br/>
            <br/>
            <span>{`• Возвращать конкретного жителя по переданному id`}</span>
            <br/>
            <br/>
            <span>{`2) При запуске приложения сохранить список жителей и данные по ним в InMemory-хранилище (хранилище в памяти). В дальнейшем взаимодействовать с этим хранилищем, чтобы получить те, или иные данные.`}</span>
            <br/>
            <br/>
            <span>{`В этом задании также нужно реализовать 2 метода api, которые описаны в задании выше. Но в первый метод (список жителей), нужно также добавить фильтрацию по возрасту (выводить жителей  с возрастом от x до y). Параметр также, опциональный, если его не передавать, то фильтр не учитывается.`}</span>
            <br/>
            <br/>
            <span>{`3)Такое же задание, что и в пункте 2, только вместо InMemory-хранилища использовать базу данных MsSql (или MySql) и EntityFramework для работы с ней`}</span>
            <br/>
            <br/>
            <span>{`Любая реализация должна быть покрыта Unit-тестами, используя NUnit или XUnit. Также любая реализация должна быть выполнена на фреймворке ASP.NET core версии 3+. А еще `}</span><b>очень хочется</b><span>{` увидеть LINQ`}</span>
          </div>
        </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
