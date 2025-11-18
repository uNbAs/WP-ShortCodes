jQuery(document).ready(function($) {
    // Confirmación para eliminar shortcodes
    $('.button-link-delete').on('click', function(e) {
        if (!confirm(csm_ajax.confirm_delete)) {
            e.preventDefault();
        }
    });
    
    // Validación del formulario de shortcodes
    $('#shortcode_name').on('blur', function() {
        var name = $(this).val();
        var regex = /^[a-zA-Z0-9_]+$/;
        
        if (name && !regex.test(name)) {
            alert('El nombre del shortcode solo puede contener letras, números y guiones bajos.');
            $(this).focus().select();
        }
    });
    
    // Ejemplos interactivos
    $('.shortcode-examples code').on('click', function() {
        var text = $(this).text();
        var $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(text).select();
        document.execCommand('copy');
        $temp.remove();
        
        // Mostrar mensaje de copiado
        var $message = $('<div class="notice notice-success is-dismissible"><p>Código copiado al portapapeles</p></div>');
        $('.wrap h1').after($message);
        setTimeout(function() {
            $message.fadeOut(function() {
                $(this).remove();
            });
        }, 2000);
    });
    
    // Mejorar la UX del editor
    var $contentEditor = $('#shortcode_content');
    if ($contentEditor.length) {
        // Añadir ayuda contextual
        $contentEditor.before(
            '<div class="notice notice-info">' +
            '<p><strong>Tip:</strong> Usa <code>{nombre_atributo}</code> para insertar atributos y <code>{{content}}</code> para el contenido entre tags.</p>' +
            '</div>'
        );
    }
});
