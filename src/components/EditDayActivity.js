import '../styles/EditDayActivity.css';

function EditDescLabel() {
    return (
        <>
            <div class="EditDescLabel">
                Description
            </div>
        </>
    )
}

function EditDesc() {
    return (
        <>
            <div class="EditDesc">
                <textarea placeholder="Spent X amount on Y item">

                </textarea>
            </div>
        </>
    )
}

function EditDescActions() {
    return (
        <>
            <div className="EditDescActions">
                <button className="EditDescActions-save">Save</button>
                <button className="EditDescActions-cancel">Cancel</button>
            </div>
        </>
    )
}

function EditDayActivity({id}) {
    return (
        <>
            <div class="EditDayActivity">
                <EditDescLabel />
                <EditDesc />
                <EditDescActions />
            </div>
        </>
    )
}

export default EditDayActivity