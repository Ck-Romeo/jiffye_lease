<div class="modal-body">
    <h5>Check First Paragraph one </h5> 
    @if($load_users)
    <select name="lease_to" id="lease_to">
       
        @foreach($load_users as $users1)
        <option value="{{ $users->jiffy_id }}">{{ $users1->jf_name }}</option>
        @endforeach

    </select>
    @endif
    <hr>
    <h5>Some More Text</h5>
    <p>Cupcake sugar plum dessert tart powder chocolate fruitcake jelly. Tootsie roll bonbon toffee danish.
        Biscuit sweet cake gummies danish. Tootsie roll cotton candy tiramisu lollipop candy cookie biscuit pie.</p>
</div>

<div class="modal-footer">
    <button type="button" class="btn grey btn-outline-secondary waves-effect waves-light" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-outline-primary waves-effect waves-light">Save changes</button>
</div>