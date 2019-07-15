
=============
ckanext-data_es_theme
=============

Plugin/Tema do Portal de Dados Abertos do Governo do Estado do Espírito Santo (Brasil):

https://dados.es.gov.br/


=============
Requisitos
=============

* CKAN 2.8.X


=============
Instalação
=============

.. Add any additional install steps to the list below.
   For example installing any non-Python dependencies or adding any required
   config settings.

Para instalar o tema ckanext-data_es_theme:

1. Ative o virtualenv no CKAN::

     source /usr/lib/ckan/default/bin/activate


2. Acesse o diretório de plugins do CKAN no virtualenv::

     cd /usr/lib/ckan/default/src/


3. Clone o tema ckanext-data_es_theme no diretório de plugins::

     git clone https://github.com/prodest/ckanext-data_es_theme.git


4. Acesse o diretório do tema no diretório de plugins do CKAN no virtualenv::

     cd ckanext-data_es_theme


5. Instale o tema ckanext-data_es_theme no virtualenv do CKAN utilizando o comando Python abaixo::

   pip install -r pip-requirements.txt
   
   python setup.py install
   
   python setup.py develop

6. Saia do virtualenv::

     deactivate



7. Adicione ``data_es_theme`` em ``ckan.plugins`` no arquivo de configuração do CKAN
    (por padrão o arquivo de configuração do CKAN está localizado em
   ``/etc/ckan/default/production.ini``).

8. Reinicie o CKAN. Por exemplo, se você implantou o CKAN com o Apache no Ubuntu::

     sudo service apache2 reload


=============
Executando Testes
=============

Para realizar testes, execute o comando abaixo::

    nosetests --nologcapture --with-pylons=test.ini

Para executar os testes e gerar um relatório de cobertura (coverage report), primeiro certifique-se de ter o plugin coverage instalado em sua virtualenv (``pip install coverage``), então execute:

    nosetests --nologcapture --with-pylons=test.ini --with-coverage --cover-package=ckanext.data_es_theme --cover-inclusive --cover-erase --cover-tests
    
 
