// export const seleccionarTexto = () => {
//     const input = document.querySelector('input[type="number"]');
//     input.select();
// };

// export const showPlaceholder = () => {
//     if (!telefono.value) {
//       telefono.value = placeholder.replace(/[0-9]/g, 'X');
//     }
//   };

// export const formatTelefono = () => {
//     let input = telefono.value;
//     input = input.replace(/\D/g, ''); // Eliminar caracteres no numéricos
//     input = input.substring(0, 10); // Limitar a 10 dígitos
//     input = input.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3'); // Formato XXX-XXX-XXXX
//     telefono.value = input;
//   };