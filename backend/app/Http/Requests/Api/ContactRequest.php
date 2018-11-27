<?php

namespace App\Http\Requests\Api;

class ContactRequest extends ApiRequest
{
    /**
     * Get data to be validated from the request.
     *
     * @return array
     */
    protected function validationData()
    {
        return $this->get('contact') ?: [];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:30',
            'email' => 'required|email|max:255',
            'subject' => 'required',
            'commentary' => 'required|min:20',
        ];
    }
}