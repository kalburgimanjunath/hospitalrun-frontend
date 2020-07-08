export default {
  patient: {
    code: 'Код пациента',
    firstName: 'Имя',
    lastName: 'Фамилия',
    suffix: 'Суффикс',
    prefix: 'Префикс',
    givenName: 'Имя',
    familyName: 'Фамилия',
    dateOfBirth: 'Дата рождения',
    approximateDateOfBirth: 'Приблизительная дата рождение',
    age: 'Возраст',
    approximateAge: 'Приблизительный возраст',
    placeOfBirth: 'Место рождения',
    sex: 'Пол',
    contactInfoType: {
      label: 'Тип',
      options: {
        home: 'Домашний',
        mobile: 'Мобильный',
        work: 'Рабочий',
        temporary: 'Временный',
        old: 'Старый',
      },
    },
    phoneNumber: 'Номер телефона',
    email: 'Email',
    address: 'Адрес',
    occupation: 'Род занятий',
    type: 'Тип пациента',
    preferredLanguage: 'Предпочтительный язык',
    basicInformation: 'Общая инфомрация',
    generalInformation: 'Основная информация',
    contactInformation: 'Контактная информация',
    unknownDateOfBirth: 'Неизвестно',
    relatedPerson: 'Родственник',
    relatedPersons: {
      error: {
        unableToAddRelatedPerson: 'Невозможно добавить нового родственника.',
        relatedPersonRequired: 'Необходимо указать родственника.',
        relationshipTypeRequired: 'Необходимо указать тип родства.',
      },
      label: 'Родственники',
      new: 'Новый родственник',
      add: 'Добавить родственника',
      relationshipType: 'Тип родства',
      warning: {
        noRelatedPersons: 'Нет родственников',
      },
      addRelatedPersonAbove: 'Добавьте родственника, используя кнопку выше.',
    },
    appointments: {
      new: 'Добавить назначение',
    },
    allergies: {
      label: 'Аллергии',
      allergyName: 'Название аллергии',
      new: 'Добавить аллергию',
      error: {
        nameRequired: 'Необходимо указать название.',
        unableToAdd: 'Невозможно добавить аллергию.',
      },
      warning: {
        noAllergies: 'Нет аллергий',
      },
      addAllergyAbove: 'Добавьте аллергию, используя кнопку выше.',
      successfullyAdded: 'Аллергия успешно добавлена!',
    },
    diagnoses: {
      label: 'Диагнозы',
      new: 'Добавить диагноз',
      diagnosisName: 'Название диагноза',
      diagnosisDate: 'Дата диагноза',
      warning: {
        noDiagnoses: 'Нет диагнозов',
      },
      error: {
        nameRequired: 'Необходимо указать название диагноза.',
        dateRequired: 'Необходимо указать дату диагноза.',
        unableToAdd: 'Невозможно добавить диагноз',
      },
      addDiagnosisAbove: 'Добавить диагноз, используя кнопку выше.',
      successfullyAdded: 'Новый диагноз успешно добавлен!',
    },
    note: 'Заметка',
    notes: {
      label: 'Заметки',
      new: 'Добавить новую заметку',
      warning: {
        noNotes: 'Нет заметок',
      },
      error: {
        noteRequired: 'Необходимо добавить заметку.',
        unableToAdd: 'Невозможно добавить новую заметку.',
      },
      addNoteAbove: 'Добавьте заметку, используя кнопку выше.',
    },
    labs: {
      label: 'Анализы',
      new: 'Добавить новый анализ',
      warning: {
        noLabs: 'Нет анализов',
      },
      noLabsMessage: 'Нет запросов анализов для этого человека.',
    },
    carePlan: {
      new: 'Добавить план лечения',
      label: 'Планы лечения',
      title: 'Заголовок',
      description: 'Описание',
      status: 'Статус',
      condition: 'Состояние',
      intent: 'Тип',
      startDate: 'Дата начала',
      endDate: 'Дата окончания',
      note: 'Заметки',
      error: {
        unableToAdd: 'Невозможно добавить план лечения.',
        titleRequired: 'Необходимо указать заголовок.',
        descriptionRequired: 'Необходимо указать описание.',
        conditionRequired: 'Необходимо указать состояние.',
        statusRequired: 'Необходимо указать статус.',
        intentRequired: 'Необходимо указать тип.',
        startDate: 'Необходимо указать дату начала.',
        endDate: 'Необходимо указать дату окончания',
      },
    },
    types: {
      charity: 'Благотворительность',
      private: 'Частный',
    },
    errors: {
      createPatientError: 'Невозможно создать нового пациента.',
      updatePatientError: 'Невозможно обновить данные пациента.',
      patientGivenNameFeedback: 'Необходимо указать имя.',
      patientDateOfBirthFeedback: 'Дата рождения не может быть позже сегодняшней даты',
      patientNumInSuffixFeedback: 'Не может содержать цифр.',
      patientNumInPrefixFeedback: 'Не может содержать цифр',
      patientNumInFamilyNameFeedback: 'Не может содержать цифр',
      patientNumInPreferredLanguageFeedback: 'Не может содержать цифр',
      invalidEmail: 'Некорректный email.',
      invalidPhoneNumber: 'Некорректный номер телефона.',
    },
  },
}