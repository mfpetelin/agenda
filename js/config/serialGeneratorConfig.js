angular.module("listaTelefonica").config(function (serialGeneratorProvider, $authProvider) {
  serialGeneratorProvider.setLength(10);

  $authProvider.facebook({
      clientId: '645120809000380'
  });
});