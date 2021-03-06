@extends('layouts.app')

@section('content')
    <h3 class="page-title">@lang('quickadmin.subprogramme.title')</h3>
    
    {!! Form::model($subprogramme, ['method' => 'PUT', 'route' => ['admin.subprogrammes.update', $subprogramme->id]]) !!}

    <div class="panel panel-default">
        <div class="panel-heading">
            @lang('quickadmin.qa_edit')
        </div>

        <div class="panel-body">
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('title', trans('quickadmin.subprogramme.fields.title').'*', ['class' => 'control-label']) !!}
                    {!! Form::text('title', old('title'), ['class' => 'form-control', 'placeholder' => '', 'required' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('title'))
                        <p class="help-block">
                            {{ $errors->first('title') }}
                        </p>
                    @endif
                </div>
            </div>
            
            <div class="row">
                <div class="col-xs-12 form-group">
                    {!! Form::label('program_id', trans('quickadmin.subprogramme.fields.program').'*', ['class' => 'control-label']) !!}
                    {!! Form::select('program_id', $programs, old('program_id'), ['class' => 'form-control select2', 'required' => '']) !!}
                    <p class="help-block"></p>
                    @if($errors->has('program_id'))
                        <p class="help-block">
                            {{ $errors->first('program_id') }}
                        </p>
                    @endif
                </div>
            </div>
        </div>
    </div>

    {!! Form::submit(trans('quickadmin.qa_update'), ['class' => 'btn btn-danger']) !!}
    {!! Form::close() !!}
@stop

