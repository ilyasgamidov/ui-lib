import $ from '../core';

$.prototype.modal = function() {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500); 
            document.body.style.overflow = 'hidden';
        });
    }

    const closeElem = document.querySelectorAll('[data-close]');
    closeElem.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        });
    });

    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
        }
    });
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-targer').slice(1));

        //btns = {count: num, setting:[[text, className = [], close, cb]]}
        const buttons = {};
        for (let j; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.setting[j][1]);
            btn.textContent = btns.setting[j][0];

            if (btns.setting[j][2]){
                btn.setAttribute('data-close', 'true');
            }
            if (btns.setting[j][3] && typeof(btns.setting[j][3] === 'funtion')){
                btn.addEventListener('click', btns.setting[j][3]);
            }

            buttons.push(btn);
        }


        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger" data-close>Close</button>
                        <button class="btn btn-succsess" >Save changes</button>
                    </div>
                </div>
            </div>
        `;
    }
};