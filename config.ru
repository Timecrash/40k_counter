require 'rubygems'
require 'bundler'

Bundler.require

require_relative './counter'
run Sinatra::Application
