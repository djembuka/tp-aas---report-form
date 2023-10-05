window.reportFormAuditorStore = {
  url: {
    getUsers: '/get-users.json',
    getItemId: '/get-item-id.json',
    autosave: '/autosave.json',
  },
  form: {
    action: '',
    method: 'POST',
  },
  hidden: [
    {
      name: 'FORM_ID',
      value: 117129,
    },
    {
      name: 'ID',
      value: 122034,
    },
    {
      name: 'sessid',
      value: '51f0617bac2ab53f8e279f9885b1612f',
    },
  ],
  blocks: [
    {
      id: 1,
      title: 'Блок может быть раскрывающимся типа collapse. Заголовок title',
      type: 'collapse',
      open: false,
      controls: [
        {
          property: 29,
          word: 'PROPERTY',
          //sort: 10,
          label: 'Текстовое поле *',
          type: 'text',
          required: true,
          pattern: '^\\d{11}$',
          completeBlock: {
            title: 'Заголовок к подсказке',
            value: '12345678912',
            comment: 'Поле с проверкой вводимых данных (pattern)',
          },
        },
        {
          property: 31,
          word: 'PROPERTY',
          //sort: 10,
          label: 'ОРНЗ *',
          type: 'ornz',
          required: true,
          pattern: '^\\d{11}$',
        },
        {
          property: 25,
          word: 'PROPERTY',
          //sort: 20,
          label: 'Выпадающий список',
          type: 'select',
          required: false,
          options: [
            {
              label: 'Выберите',
              code: '',
            },
            {
              label: 'Основной',
              code: '1',
            },
            {
              label: 'Дополнительный',
              code: '2',
            },
          ],
          selected: { label: 'Выберите', code: '' },
        },
        {
          property: 26,
          word: 'PROPERTY',
          //sort: 30,
          label: 'У чекбокса не может быть комментария, только label',
          type: 'checkbox',
          required: true,
        },
      ],
    },
    {
      id: 7,
      type: 'collapse',
      title: 'Блок collapse, раскрытый по умолчанию',
      open: true,
      controls: [
        {
          property: 23,
          word: 'PROPERTY',
          //sort: 10,
          label: 'Тестовое поле вне блока *',
          type: 'text',
          required: true,
          value: 'Value',
          completeBlock: {
            comment: 'текст',
            title: 'click here',
            value: 'Link',
          },
        },
      ],
    },
    {
      id: 17,
      title: 'Блок обычный, его нельзя закрыть',
      controls: [
        {
          property: 125,
          word: 'PROPERTY',
          //sort: 20,
          label: 'Выпадающий список',
          type: 'select',
          required: false,
          options: [
            {
              label: 'Выберите',
              code: '',
            },
            {
              label: 'Основной',
              code: '1',
            },
            {
              label: 'Дополнительный',
              code: '2',
            },
          ],
          selected: { label: 'Выберите', code: '' },
          completeBlock: {
            comment:
              'У select может быть только комментарий, подсказка не выводится (в будущем возможно стоит реализовать подсказку)',
            title: 'click here',
            value: 'Link',
          },
        },
      ],
    },
    {
      id: 3,
      title: 'Блок с мультиполями',
      type: 'collapse',
      open: true,
      controls: [
        {
          type: 'multyblock',
          property: 1132,
          word: 'PROP',
          count: 3,
          title: 'Простое мультиполе',
          controls: [
            {
              type: 'text',
              property: 133,
              label: 'Наименование *',
              bigLabel: true,
              required: true,
            },
          ],
          items: [
            {
              133: 'Не более 3 полей',
              id: 123,
            },
            {
              133: '',
              id: 87895,
            },
          ],
        },
        {
          type: 'multyblock',
          property: 132,
          word: 'PROP',
          count: 3,
          title: 'Места работы',
          controls: [
            {
              type: 'text',
              property: 133,
              label:
                'Наименование аудиторской организации/ФИО индивидуального аудитора *',
              bigLabel: true,
              required: true,
            },
            {
              type: 'text',
              property: 134,
              word: 'HL',
              label: 'ОРНЗ работодателя *',
              required: true,
            },
            {
              type: 'select',
              tab: 1,
              property: 135,
              word: 'HL',
              label: 'Основное место работы или совместительство *',
              bigLabel: true,
              options: [
                {
                  label: 'Выберите',
                  code: '',
                },
                {
                  label: 'Основное',
                  code: 'Основное',
                },
                {
                  label: 'Совместительство',
                  code: 'Совместительство',
                },
              ],
              selected: {
                label: 'Выберите',
                code: '',
              },
              required: true,
            },
          ],
          items: [
            {
              133: 'ООО Тестовая',
              134: '88888888888',
              135: {
                label: 'Основное',
                code: 'Основное',
              },
              id: 123,
            },
            {
              133: '',
              134: '',
              135: {
                label: 'Выберите',
                code: '',
              },
              id: 87895,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      controls: [
        {
          property: 1,
          word: 'FORM_AGREEMENT',
          label:
            'Я принимаю <a href="/privacy/" target="_blank">условия Пользовательского соглашения</a> и даю своё согласие СРО ААС на обработку моей персональной информации на условиях, определенных Политикой конфиденциальности.',
          required: true,
          type: 'checkbox',
          value: 'Y',
          checked: true,
          invalid: false,
        },
      ],
    },
  ],
  submit: {
    button: 'Отправить',
  },
};

window.a = {
  url: {
    getUsers: '/get-users.json',
    getItemId: '/get-item-id.json',
    autosave: '/autosave.json',
  },
  form: {
    action: 'url',
    method: 'GET',
  },
  hidden: [
    {
      name: 'APPEAL_ID',
      value: 116397,
    },
    {
      name: 'FORM_ID',
      value: 107328,
    },
  ],
  blocks: [
    /*{
      id: 1,
      type: 'collapse',
      title: 'Основные сведения',
      open: false,
      controls: [
        {
          property: 1,
          word: 'PROPERTY',
          //sort: 10,
          label: 'ФИО аудитора *',
          type: 'text',
          required: true,
          value: '',
          completeBlock: {
            title: 'Title',
            value: 'Value',
            comment: 'текст',
          },
        },
      ],
    },
    {
      id: 2,
      type: 'collapse',
      title: 'Актуальные контакты',
      open: false,
      controls: [
        {
          property: 4,
          word: 'PROPERTY',
          //sort: 10,
          label: 'E-mail *',
          type: 'text',
          required: true,
          value: '',
          pattern: '^([^@s]+)@((?:[-a-z0-9]+.)+[a-z]{2,})$',
          completeBlock: {
            comment: 'проверка формата данных',
          },
        },
        {
          property: 5,
          word: 'PROPERTY',
          //sort: 20,
          label: 'Телефон мобильный *',
          type: 'text',
          required: true,
          value: '',
          pattern: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
          completeBlock: {
            comment: 'проверка формата',
          },
        },
        {
          property: 6,
          word: 'PROPERTY',
          //sort: 30,
          label: 'Телефон рабочий *',
          type: 'text',
          required: true,
          value: '',
          pattern: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
          completeBlock: {
            comment: 'проверка формата',
          },
        },
      ],
    },
    {
      id: 3,
      type: 'collapse',
      title:
        'Сведения об участии в осуществлении аудиторской деятельности (по каждому работодателю)',
      open: false,
      controls: [
        {
          property: 7,
          word: 'PROPERTY',
          //sort: 10,
          label: 'Наименование организации / ФИО инд аудитора *',
          type: 'text',
          required: true,
          value: 'Test',
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 8,
          word: 'PROPERTY',
          //sort: 20,
          label: 'ОРНЗ организации / инд. аудитора *',
          type: 'ornz',
          count: 5,
          required: true,
          value: 'Test',
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 13,
          word: 'PROPERTY',
          //sort: 30,
          label: 'Характер труд. договора *',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Выберите',
              code: '',
            },
            {
              label: 'Основное',
              code: '1',
            },
            {
              label: 'Совместительство',
              code: '2',
            },
          ],
          selected: { label: 'Выберите', code: '' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 14,
          word: 'PROPERTY',
          //sort: 40,
          label: 'Участие в осуществлении аудиторской деятельности *',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Да',
              code: '1',
            },
            {
              label: 'Нет',
              code: '2',
            },
          ],
          selected: { label: 'Да', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 15,
          word: 'PROPERTY',
          //sort: 50,
          label:
            'Участие в осуществлении аудиторской деятельности в качестве руководителя аудита *',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Да',
              code: '1',
            },
            {
              label: 'Нет',
              code: '2',
            },
          ],
          selected: { label: 'Да', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 16,
          word: 'PROPERTY',
          //sort: 60,
          label: 'Aудит ОЗО *',
          type: 'select',
          tab: 1,
          required: true,
          options: [
            {
              label: 'Да',
              code: '1',
            },
            {
              label: 'Нет',
              code: '2',
            },
          ],
          selected: { label: 'Да', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 17,
          word: 'PROPERTY',
          //sort: 70,
          label: 'Аудит ОЗО на фин. рынке *',
          type: 'select',
          tab: 1,
          required: true,
          options: [
            {
              label: 'Да',
              code: '1',
            },
            {
              label: 'Нет',
              code: '2',
            },
          ],
          selected: { label: 'Да', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 18,
          word: 'PROPERTY',
          //sort: 80,
          label: 'Аудит организаций, с ценными бумагами *',
          type: 'select',
          tab: 1,
          required: true,
          options: [
            {
              label: 'Да',
              code: '1',
            },
            {
              label: 'Нет',
              code: '2',
            },
          ],
          selected: { label: 'Да', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 19,
          word: 'PROPERTY',
          //sort: 90,
          label: 'Аудит кредитных организаций *',
          type: 'select',
          tab: 1,
          required: true,
          options: [
            {
              label: 'Да',
              code: '1',
            },
            {
              label: 'Нет',
              code: '2',
            },
          ],
          selected: { label: 'Да', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 20,
          word: 'PROPERTY',
          //sort: 100,
          label: 'Аудит страховых организаций *',
          type: 'select',
          tab: 1,
          required: true,
          options: [
            {
              label: 'Да',
              code: '1',
            },
            {
              label: 'Нет',
              code: '2',
            },
          ],
          selected: { label: 'Да', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 21,
          word: 'PROPERTY',
          //sort: 110,
          label: 'Аудит проф. участников рынка ценных бумаг *',
          type: 'select',
          tab: 2,
          required: true,
          options: [
            {
              label: 'Да',
              code: '1',
            },
            {
              label: 'Нет',
              code: '2',
            },
          ],
          selected: { label: 'Да', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 22,
          word: 'PROPERTY',
          //sort: 120,
          label: 'Количество аудитов *',
          type: 'select',
          required: true,
          options: [
            {
              label: '1-50',
              code: '1',
            },
            {
              label: '51-100',
              code: '2',
            },
            {
              label: '101-150',
              code: '3',
            },
            {
              label: 'Более 150',
              code: '4',
            },
          ],
          selected: { label: '1-50', code: '1' },
          completeBlock: {
            comment: 'текст',
          },
        },
      ],
    },
    {
      id: 4,
      type: 'collapse',
      title: 'Сведения о работе',
      open: true,
      controls: [
        {
          property: 9,
          word: 'PROPERTY',
          //sort: 10,
          label: 'Наименование организации *',
          type: 'text',
          required: true,
          value: '',
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 10,
          word: 'PROPERTY',
          //sort: 20,
          label: 'ОРНЗ *',
          type: 'ornz',
          count: 3,
          required: true,
          value: '',
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          property: 11,
          word: 'PROPERTY',
          //sort: 30,
          label: 'Должность *',
          type: 'text',
          required: true,
          value: '',
          completeBlock: {
            comment: 'текст',
          },
        },
      ],
    },
    {
      id: 5,
      type: 'collapse',
      title:
        'Информация о наличии свидетельств того, что деловая (профессиональная) репутация аудитора может оказаться небезупречной',
      open: true,
      controls: [
        {
          property: 28,
          word: 'PROPERTY',
          //sort: 10,
          label:
            'Наличие в числе связанных с аудиторской организацией лиц физического и/ или юридического лица (лиц), которое (которые) прекратило (прекратили) членство в саморегулируемой организации аудиторов в период, когда в отношении этого лица (лиц) и/или связанных с ним (ними) лиц были назначены или проводились мероприятия в рамках ВККР/ВКД/НД и/или осуществлялось дисциплинарное производство, при этом заявление о прекращении членства в саморегулируемой организации аудиторов подано менее, чем за 90 календарных дней до даты начала проверки. *',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Выберите ответ',
              code: '',
            },
            {
              label: '51-100',
              code: '2',
            },
            {
              label: '101-150',
              code: '3',
            },
            {
              label: 'Более 150',
              code: '4',
            },
          ],
          selected: { label: 'Выберите ответ', code: '' },
        },
      ],
    },*/

    {
      id: 7,
      type: 'collapse',
      title: 'Место работы тест',
      open: true,
      controls: [
        {
          property: 23,
          word: 'PROPERTY',
          //sort: 10,
          label: 'Тестовое поле вне блока *',
          type: 'text',
          required: true,
          value: 'Value',
          completeBlock: {
            comment: 'текст',
          },
        },
        {
          //sort: 20,
          property: 26,
          word: 'PROP',
          type: 'multyblock',
          count: 5,
          title: 'Место работы',
          controls: [
            {
              property: 24,
              word: 'PROPERTY',
              //sort: 10,
              label: 'Наименование организации *',
              type: 'text',
              required: true,
            },
            {
              property: 31,
              word: 'PROPERTY',
              //sort: 10,
              label: 'ОРНЗ организации *',
              type: 'ornz',
              required: true,
            },
            {
              property: 29,
              word: 'PROPERTY',
              //sort: 10,
              label: 'Должность *',
              type: 'text',
              required: true,
            },
            {
              property: 32,
              word: 'PROPERTY',
              //sort: 10,
              label: 'Дата увольнения *',
              type: 'text',
              required: true,
              value: '',
            },
            {
              property: 25,
              word: 'PROPERTY',
              //sort: 20,
              label: 'Характер труд.договора',
              type: 'select',
              required: false,
              options: [
                {
                  label: 'Выберите',
                  code: '',
                },
                {
                  label: 'Основной',
                  code: '1',
                },
                {
                  label: 'Дополнительный',
                  code: '2',
                },
              ],
              selected: { label: 'Выберите', code: '' },
            },
            {
              property: 26,
              word: 'PROPERTY',
              //sort: 30,
              label:
                'Участие в аудиторских проверках (указать количество проверок) *',
              type: 'text',
              required: true,
              completeBlock: {
                comment:
                  'Укажите количество завершенных проверок (проверок, по которым выдано аудиторское заключение), в которых вы участвовали в течение отчетного года (целое число). Если Вы не участвовали в аудиторских проверках – укажите 0.',
              },
            },
            {
              property: 30,
              word: 'PROPERTY',
              //sort: 30,
              label: 'Оказание прочих аудиторских услуг (указать виды услуг) *',
              type: 'text',
              required: true,
              completeBlock: {
                comment:
                  'Укажите название прочих услуг, например: постановка бух.учета, налоговое консультирование.',
              },
            },
          ],
          items: [
            {
              id: '123',
              24: 'Какое-то значение',
              31: '12345678978',
              29: 'Какое-то значение',
              32: '05.02.2015',
              25: { label: 'Дополнительный', code: '2' },
              26: 'Другое значение',
              30: 'Аудит, проверки и прочее',
            },
          ],
        },
      ],
    },
    {
      id: 6,
      controls: [
        {
          property: 12,
          word: 'PROPERTY',
          sort: 0,
          label:
            'Я принимаю <a href="/privacy/" target="_blank">условия Пользовательского соглашения</a> и даю своё согласие СРО ААС на обработку моей персональной информации на условиях, определенных Политикой конфиденциальности.',
          type: 'checkbox',
          required: true,
          value: 'Y',
          checked: true,
        },
      ],
    },
  ],
  form: {
    action: 'url',
    method: 'GET',
  },
  submit: {
    button: 'Отправить',
  },
};
