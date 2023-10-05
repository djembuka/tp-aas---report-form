window.reportFormStore = {
  blocks: [
    {
      id: 1,
      type: 'collapse',
      title: 'Основные сведения',
      open: true,
      controls: [
        {
          property: 42,
          word: 'PROPERTY',
          sort: 0,
          label: 'ОРНЗ организации / индивидуального аудитора *',
          type: 'text',
          required: true,
          value: '22006129',
          multy: false,
          pattern: '^\\d{11}$',
          completeBlock: {
            title: 'Text',
            value: '12345678978',
            comment: '',
          },
        },
        {
          property: 43,
          word: 'PROPERTY',
          sort: 0,
          label: '789 *',
          type: 'text',
          required: true,
          value: '',
          multy: false,
          pattern: '^\\d{11}$',
          completeBlock: {
            title: 'Text',
            value: '12345678978',
            comment: 'Comment',
          },
        },
      ],
    },
    {
      id: 2,
      title: 'Дополнительные сведения',
      open: true,
      controls: [
        {
          property: 44,
          word: 'PROPERTY',
          sort: 0,
          label: 'ОРНЗ организации / индивидуального аудитора *',
          type: 'text',
          required: true,
          value: '32006129',
          multy: false,
          pattern: '^\\d{11}$',
          completeBlock: {
            title: 'Text',
            value: '12345678978',
            comment: '',
          },
        },
        {
          property: 45,
          word: 'PROPERTY',
          sort: 0,
          label: '789 *',
          type: 'text',
          required: true,
          value: '',
          multy: false,
          pattern: '^\\d{11}$',
          completeBlock: {
            title: 'Text',
            value: '12345678978',
            comment: 'Comment',
          },
        },
      ],
    },

    {
      id: 3,
      title: null,
      open: true,
      controls: [
        {
          property: 40,
          word: 'PROPERTY',
          sort: 0,
          label:
            'Я принимаю <a href="/privacy/" target="_blank">условия Пользовательского соглашения</a> и даю своё согласие СРО ААС на обработку моей персональной информации на условиях, определенных Политикой конфиденциальности.',
          type: 'checkbox',
          required: true,
          value: 'Y',
          multy: false,
          checked: false,
          invalid: false,
        },
      ],
    },
  ],
};
