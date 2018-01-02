const messages = {
  EN: {
    message: {
      hello: 'hello world'
    }
  },
  FR: {
    message: {
      hello: 'bonjour monde'
    }
  }
}

const i18n = new VueI18n({
  locale: 'FR', // set locale
  messages // set locale messages
})


// Create a Vue instance with `i18n` option
new Vue({ i18n,
	data: {
		proposedLanguage: 'EN'
	},
	methods: {
		reinit: function() {
			console.log(i18n.locale);
			
			if(i18n.locale == 'FR') {
				i18n.locale = 'EN';
				this.proposedLanguage = 'FR';
			} else {
				i18n.locale = 'FR';
				this.proposedLanguage = 'EN';
			}
			
			console.log(i18n.locale);
		}
	}
}).$mount('#app')